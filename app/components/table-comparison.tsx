import React from 'react'
import { styled } from '~/stitches'
import {
  AnchorButton,
  Heading,
  Caption,
  Table,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  P,
  VisuallyHidden,
} from '~/components'

export interface Head {
  text: string
}

export interface Foot {
  text: string
  url?: string
}

export interface TableData {
  caption: string
  head: Head[]
  body: any[][]
  foot: Foot[]
}

interface TableComparisonBuilderProps {
  data: TableData
}

const PriceText = styled('span', {
  fontSize: '$8',
})

export const TableComparisonBuilder: React.FunctionComponent<TableComparisonBuilderProps> =
  ({ data }) => {
    const { caption, head, body, foot } = data

    return (
      <Table>
        <Caption>
          <VisuallyHidden.Root>{caption}</VisuallyHidden.Root>
        </Caption>

        <Thead>
          <Tr>
            {head.map((item, index) => (
              <Th key={`head-${index}`} scope="col">
                <Heading as="h4">{item.text}</Heading>
              </Th>
            ))}
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td style={{ verticalAlign: 'top' }}>
              <Heading as="h5">Pricing</Heading>
            </Td>
            <Td>
              <Heading as="h5">
                <PriceText>$0</PriceText> forever
              </Heading>
              <P>For personal hobby projects and experiments.</P>
              <AnchorButton href="https://app.kontenbase.com">
                Get started
              </AnchorButton>
            </Td>
            <Td>
              <Heading as="h5">
                <PriceText>
                  $1 <del>$5</del>
                </PriceText>{' '}
                per month
              </Heading>
              <P>For professional personal projects.</P>
              <AnchorButton href="https://app.kontenbase.com">
                Get started
              </AnchorButton>
            </Td>
          </Tr>

          {body.map((row, index) => (
            <React.Fragment key={`row-${index}`}>
              <Tr>
                {row.map((text, i) => {
                  return <Td key={`text-${i}`}>{text}</Td>
                })}
              </Tr>
            </React.Fragment>
          ))}
        </Tbody>

        <Tfoot>
          <Tr>
            {foot.map((item, index) => (
              <Td key={`foot-${index}`} scope="row">
                {item.url && (
                  <AnchorButton href={item.url}>{item.text}</AnchorButton>
                )}
                {!item.text && <span>{item.text}</span>}
              </Td>
            ))}
          </Tr>
        </Tfoot>
      </Table>
    )
  }

export const TableComparison: React.FunctionComponent = () => {
  return (
    <Table>
      <VisuallyHidden.Root>
        <Caption>Pricing plan comparison</Caption>
      </VisuallyHidden.Root>

      <Thead>
        <Tr>
          <Th scope="col">
            <Heading as="h4">Plans</Heading>
          </Th>
          <Th scope="col">
            <Heading as="h4">Free</Heading>
          </Th>
          <Th scope="col">
            <Heading as="h4">Pro</Heading>
          </Th>
        </Tr>
      </Thead>

      <Tbody>
        <Tr>
          <Th scope="row">Pricing</Th>
          <Td>
            <div>
              <P>$0 /project /month</P>
              <P>Perfect for hobby projects and experiments.</P>
              <a href="https://app.kontenbase.com">Get started</a>
            </div>
          </Td>
          <Td>
            <div>
              <P>$25 /project /month</P>
              <P>Perfect for hobby projects and experiments.</P>
              <a href="https://app.kontenbase.com">Get started</a>
            </div>
          </Td>
        </Tr>

        <Tr>
          <Th scope="colgroup">
            <div>
              <div>🔵</div>
              <h4>Database</h4>
            </div>
          </Th>
          <Td></Td>
          <Td></Td>
        </Tr>

        <Tr>
          <Th scope="row">
            <span>Unlimited API requests </span>
          </Th>
          <Td>
            ✅<span>Included in</span>
          </Td>
          <Td>
            ✅<span>Included in</span>
          </Td>
        </Tr>

        <Tr>
          <Th scope="row">
            <span>Realtime functionality</span>
          </Th>
          <Td>
            ✅<span>Included in</span>
          </Td>
          <Td>
            ✅<span>Included in</span>
          </Td>
        </Tr>

        <Tr>
          <Th scope="row">
            <span>Optimized database instances </span>
            <span data-tip="Why? Unique workload requirements, heavy reads and writes, compliance">
              ❓
            </span>
          </Th>
          <Td>
            〰️
            <span>Not included in </span>
          </Td>
          <Td>
            〰️
            <span>Not included in </span>
          </Td>
        </Tr>
        <Tr>
          <Th scope="row">
            <span>Database space </span>
          </Th>
          <Td>
            <span>Up to 500 MB</span>
          </Td>
          <Td>
            <span>Up to 8 GB</span>
          </Td>
        </Tr>

        <Tr>
          <Th scope="row">
            <span>Pausing </span>
            <span data-tip="Unused projects That have no activity or API requests will be shut down. They can be reactivated by logging into The dashboard">
              ❓
            </span>
          </Th>
          <Td>
            <span>Paused after 1 week inactivity</span>
          </Td>
          <Td>
            <span>Never</span>
          </Td>
        </Tr>

        <Tr>
          <Th scope="row">
            <span>Transfer limits </span>
            <span data-tip="Good news, only download operations are counted towards The limit">
              ❓
            </span>
          </Th>
          <Td>
            <span>Up to 2GB</span>
          </Td>
          <Td>
            <span>Up to 50GB</span>
          </Td>
        </Tr>

        <Tr>
          <Th
            className="pricing-table__product-row bg-gray-50 dark:bg-gray-700 py-3 pl-6 text-sm font-medium text-gray-900 dark:text-white text-left"
            scope="colgroup"
          >
            <div className="sbui-space-row sbui-space-x-4">
              <div className="inline-flex items-center justify-center rounded-md bg-gray-800 dark:bg-white text-white h-8 w-8">
                🔵
              </div>
              <h4 className="sbui-typography-title m-0">AuTh</h4>
            </div>
          </Th>
          <Td className="pricing-table__product-row bg-gray-50 dark:bg-dark-700 py-5 px-6"></Td>
          <Td className="pricing-table__product-row bg-gray-50 dark:bg-dark-700 py-5 px-6"></Td>
          <Td className="pricing-table__product-row bg-gray-50 dark:bg-dark-700 py-5 px-6"></Td>
        </Tr>

        <Tr>
          <Th scope="row">
            <span>Users </span>
          </Th>
          <Td>
            <span>10,000 Users</span>
          </Td>
          <Td>
            <span>100,000 Users</span>
          </Td>
        </Tr>

        <Tr>
          <Th scope="row">
            <span>Remove Kontenbase branding from response </span>
          </Th>
          <Td>
            〰️
            <span>Not included in </span>
          </Td>
          <Td>
            ✅<span>Included in</span>
          </Td>
        </Tr>

        <Tr>
          <Th scope="row">
            <span>Audit Trails </span>
          </Th>
          <Td>
            <span>1 hour</span>
          </Td>
          <Td>
            <span>7 days</span>
          </Td>
        </Tr>

        <Tr>
          <Th scope="colgroup">
            <div className="sbui-space-row sbui-space-x-4">
              <div className="inline-flex items-center justify-center rounded-md bg-gray-800 dark:bg-white text-white h-8 w-8">
                🔵
              </div>
              <h4 className="sbui-typography-title m-0">Object storage</h4>
            </div>
          </Th>
          <Td className="pricing-table__product-row bg-gray-50 dark:bg-dark-700 py-5 px-6"></Td>
          <Td className="pricing-table__product-row bg-gray-50 dark:bg-dark-700 py-5 px-6"></Td>
        </Tr>

        <Tr>
          <Th scope="row">
            <span>Storage total </span>
          </Th>
          <Td>
            <span>Up to 1 GB</span>
          </Td>
          <Td>
            <span>Up to 100 GB</span>
          </Td>
        </Tr>
        <Tr>
          <Th scope="row">
            <span>Transfer limits </span>
            <span data-tip="Good news, only download operations are counted towards The limit">
              ❓
            </span>
          </Th>
          <Td>
            <span>Up to 2 GB</span>
          </Td>
          <Td>
            <span>Up to 200 GB</span>
          </Td>
        </Tr>

        <Tr>
          <Th scope="colgroup">
            <div className="sbui-space-row sbui-space-x-4">
              <h4 className="sbui-typography-title m-0">Dashboard</h4>
            </div>
          </Th>
          <Td className="pricing-table__product-row bg-gray-50 dark:bg-dark-700 py-5 px-6"></Td>
          <Td className="pricing-table__product-row bg-gray-50 dark:bg-dark-700 py-5 px-6"></Td>
          <Td className="pricing-table__product-row bg-gray-50 dark:bg-dark-700 py-5 px-6"></Td>
        </Tr>

        <Tr>
          <Th scope="row">
            <span>Team members </span>
          </Th>
          <Td>
            <span>Unlimited</span>
          </Td>
          <Td>
            <span>Unlimited</span>
          </Td>
        </Tr>

        <Tr>
          <Th scope="row">
            <span>Access conTrols </span>
          </Th>
          <Td>
            〰️
            <span>Not included in </span>
          </Td>
          <Td>
            <span>Coming soon</span>
          </Td>
        </Tr>

        <Tr>
          <Th scope="row">
            <span>Audit Trails </span>
          </Th>
          <Td>
            〰️
            <span>Not included in </span>
          </Td>
          <Td>
            〰️
            <span>Not included in </span>
          </Td>
        </Tr>

        <Tr>
          <Th scope="colgroup">
            <div className="sbui-space-row sbui-space-x-4">
              <h4 className="sbui-typography-title m-0">
                Support and Compliance
              </h4>
            </div>
          </Th>
          <Td className="pricing-table__product-row bg-gray-50 dark:bg-dark-700 py-5 px-6"></Td>
          <Td className="pricing-table__product-row bg-gray-50 dark:bg-dark-700 py-5 px-6"></Td>
        </Tr>

        <Tr>
          <Th scope="row">
            <span>Community support </span>
          </Th>
          <Td>
            ✅<span>Included in</span>
          </Td>
          <Td>
            ✅<span>Included in</span>
          </Td>
        </Tr>

        <Tr>
          <Th scope="row">
            <span>Email support </span>
          </Th>
          <Td>
            〰️
            <span>Not included in </span>
          </Td>
          <Td>
            ✅<span>Included in</span>
          </Td>
        </Tr>

        <Tr>
          <Th scope="row">
            <span>Designated support </span>
          </Th>
          <Td>
            〰️
            <span>Not included in </span>
          </Td>
          <Td>
            〰️
            <span>Not included in </span>
          </Td>
        </Tr>
      </Tbody>

      <Tfoot>
        <Tr>
          <Th scope="row">Choose your plan</Th>
          <Td>
            <a href="https://app.kontenbase.com">Get Started</a>
          </Td>
          <Td>
            <a href="https://app.kontenbase.com">Get Started</a>
          </Td>
        </Tr>
      </Tfoot>
    </Table>
  )
}
