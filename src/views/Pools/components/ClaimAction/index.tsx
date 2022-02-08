import React, { useContext, useState } from 'react';
import { Text, Button, Skeleton} from '@metagg/mgg-uikit';
import { ThemeContext } from 'styled-components';
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import Balance from 'components/Balance'
import { BIG_ZERO } from 'utils/bigNumber'
import { getBalanceAmount } from 'utils/formatBalance'
import { useAppDispatch } from 'state'
import { fetchFarmUserDataAsync } from 'state/farms'
import { usePriceCakeBusd } from 'state/hooks'
import { useClaim } from 'hooks/useHarvest'
import { useTranslation } from 'contexts/Localization'
import useToast from 'hooks/useToast';
import { ActionContainer, ActionContent, ActionTitles, Earned } from '../../../Farms/components/FarmTable/Actions/styles';


interface ClaimActionProps {
  pid: number
  stakingContract?: string,
  tokenRewardSymbol?: string,
  userData?: {
    allowance: BigNumber
    stakingTokenBalance: BigNumber
    stakedBalance: BigNumber
    pendingReward: BigNumber
  }
  userDataReady: boolean
}

const ClaimAction: React.FC<ClaimActionProps> = ({stakingContract, tokenRewardSymbol, pid, userData, userDataReady,}) => {
    const theme = useContext(ThemeContext)
    const earningsBigNumber = new BigNumber(userData.pendingReward)
    const cakePrice = usePriceCakeBusd()
    let earnings = BIG_ZERO
    let earningsBusd = 0
    let displayBalance = userDataReady ? earnings.toLocaleString() : <Skeleton width={60} />

    // If user didn't connect wallet default balance will be 0
    if (!earningsBigNumber.isZero()) {
      earnings = getBalanceAmount(earningsBigNumber)
      earningsBusd = earnings.multipliedBy(cakePrice).toNumber()
      displayBalance = earnings.toFixed(3, BigNumber.ROUND_DOWN)
    }
    const [pendingTx, setPendingTx] = useState(false)
    const { onReward } = useClaim(stakingContract)
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const { account } = useWeb3React()
    const { toastError, toastSuccess } = useToast()

    return (
        <ActionContainer style={{ margin: '10px 0' }}>
      <ActionTitles>
        <Text bold textTransform='uppercase' color={theme.colors.MGG_accent2} fontSize='12px' pr='4px'>
          MGG
        </Text>
        <Text bold textTransform='uppercase' color='textSubtle' fontSize='12px'>
          Earned
        </Text>
      </ActionTitles>
      <ActionContent>
        <div>
          <Earned>{displayBalance}</Earned>
          {earningsBusd > 0 && (
            <Balance fontSize='12px' color='textSubtle' decimals={2} value={earningsBusd} unit=' USD' prefix='~' />
          )}
        </div>
        <Button
          style={{borderRadius: '3px', height: '40px'}}
          ml='4px'
          disabled={earnings.eq(0) || pendingTx || !userDataReady}
          onClick={async () => {
            setPendingTx(true)
            try {
              await onReward()
              toastSuccess(
                `${t('Claimed')}!`,
                t('Your %symbol% earnings have been sent to your wallet!', { symbol: tokenRewardSymbol }),
              )
            } catch (e) {
              toastError(
                t('Error'),
                t('Please try again. Confirm the transaction and make sure you are paying enough gas!'),
              )
              console.error(e)
            } finally {
              setPendingTx(false)
            }
            dispatch(fetchFarmUserDataAsync({ account, pids: [pid] }))
          }}
        >
          Claim
        </Button>
      </ActionContent>
    </ActionContainer>
    )
}

export default ClaimAction