import { Content, TableComparisonBuilder, TableComparison } from '~/components'
import pricingPlans from './pricing-plans.json'

export const PricingTable: React.FunctionComponent = () => {
  return (
    <Content>
      <TableComparisonBuilder data={pricingPlans} />
      {/* <TableComparison/> */}
    </Content>
  )
}

export default PricingTable
