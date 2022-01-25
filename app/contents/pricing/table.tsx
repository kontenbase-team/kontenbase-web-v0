import pricingPlans from './pricing-plans.json'

import { Content, TableComparisonBuilder } from '~/components'

export const PricingTable: React.FunctionComponent = () => (
    <Content size="adaptive">
      <TableComparisonBuilder data={pricingPlans} />
    </Content>
  )

export default PricingTable
