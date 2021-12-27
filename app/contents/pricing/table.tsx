import { Content, TableComparisonBuilder } from '~/components'
import pricingPlans from './pricing-plans.json'

export const PricingTable: React.FunctionComponent = () => {
  return (
    <Content size="adaptive">
      <TableComparisonBuilder data={pricingPlans} />
    </Content>
  )
}

export default PricingTable
