import { Content, TableComparison } from '~/components'

interface PricingTableProps {}

export const PricingTable: React.FunctionComponent<PricingTableProps> = () => {
  return (
    <Content>
      <TableComparison />
    </Content>
  )
}

export default PricingTable
