interface TableComparisonProps {}

export const TableComparison: React.FunctionComponent<TableComparisonProps> =
  () => {
    return (
      <table>
        <caption>Pricing plan comparison</caption>

        <thead>
          <tr>
            <th scope="col">
              <h4>Plans</h4>
            </th>
            <th scope="col">
              <h4>Free</h4>
            </th>
            <th scope="col">
              <h4>Pro</h4>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row">Pricing</th>
            <td>
              <div>
                <p>$0 /project /month</p>
                <p>Perfect for hobby projects and experiments.</p>
                <a href="https://app.supabase.io">Get started</a>
              </div>
            </td>
            <td>
              <div>
                <p>$25 /project /month</p>
                <p>Perfect for hobby projects and experiments.</p>
                <a href="https://app.supabase.io">Get started</a>
              </div>
            </td>
          </tr>

          <tr>
            <th scope="colgroup">
              <div>
                <div>🔵</div>
                <h4>Database</h4>
              </div>
            </th>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <th scope="row">
              <span>Unlimited API requests </span>
            </th>
            <td>
              ✅<span>Included in </span>
            </td>
            <td>
              ✅<span>Included in </span>
            </td>
          </tr>

          <tr>
            <th scope="row">
              <span>Realtime functionality</span>
            </th>
            <td>
              ✅<span>Included in </span>
            </td>
            <td>
              ✅<span>Included in </span>
            </td>
          </tr>

          <tr>
            <th scope="row">
              <span>Optimized database instances </span>
              <span data-tip="Why? Unique workload requirements, heavy reads and writes, compliance">
                ❓
              </span>
            </th>
            <td>
              〰️
              <span>Not included in </span>
            </td>
            <td>
              〰️
              <span>Not included in </span>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <span>Database space </span>
            </th>
            <td>
              <span>Up to 500 MB</span>
            </td>
            <td>
              <span>Up to 8 GB</span>
            </td>
          </tr>

          <tr>
            <th scope="row">
              <span>Pausing </span>
              <span data-tip="Unused projects that have no activity or API requests will be shut down. They can be reactivated by logging into the dashboard">
                ❓
              </span>
            </th>
            <td>
              <span>Paused after 1 week inactivity</span>
            </td>
            <td>
              <span>Never</span>
            </td>
          </tr>

          <tr>
            <th scope="row">
              <span>Transfer limits </span>
              <span data-tip="Good news, only download operations are counted towards the limit">
                ❓
              </span>
            </th>
            <td>
              <span>Up to 2GB</span>
            </td>
            <td>
              <span>Up to 50GB</span>
            </td>
          </tr>

          <tr>
            <th
              className="pricing-table__product-row bg-gray-50 dark:bg-gray-700 py-3 pl-6 text-sm font-medium text-gray-900 dark:text-white text-left"
              scope="colgroup"
            >
              <div className="sbui-space-row sbui-space-x-4">
                <div className="inline-flex items-center justify-center rounded-md bg-gray-800 dark:bg-white text-white h-8 w-8">
                  🔵
                </div>
                <h4 className="sbui-typography-title m-0">Auth</h4>
              </div>
            </th>
            <td className="pricing-table__product-row bg-gray-50 dark:bg-dark-700 py-5 px-6"></td>
            <td className="pricing-table__product-row bg-gray-50 dark:bg-dark-700 py-5 px-6"></td>
            <td className="pricing-table__product-row bg-gray-50 dark:bg-dark-700 py-5 px-6"></td>
          </tr>

          <tr>
            <th scope="row">
              <span>Users </span>
            </th>
            <td>
              <span>10,000 Users</span>
            </td>
            <td>
              <span>100,000 Users</span>
            </td>
          </tr>

          <tr>
            <th scope="row">
              <span>Remove Kontenbase branding from response </span>
            </th>
            <td>
              〰️
              <span>Not included in </span>
            </td>
            <td>
              ✅<span>Included in </span>
            </td>
          </tr>

          <tr>
            <th scope="row">
              <span>Audit trails </span>
            </th>
            <td>
              <span>1 hour</span>
            </td>
            <td>
              <span>7 days</span>
            </td>
          </tr>

          <tr>
            <th scope="colgroup">
              <div className="sbui-space-row sbui-space-x-4">
                <div className="inline-flex items-center justify-center rounded-md bg-gray-800 dark:bg-white text-white h-8 w-8">
                  🔵
                </div>
                <h4 className="sbui-typography-title m-0">Object storage</h4>
              </div>
            </th>
            <td className="pricing-table__product-row bg-gray-50 dark:bg-dark-700 py-5 px-6"></td>
            <td className="pricing-table__product-row bg-gray-50 dark:bg-dark-700 py-5 px-6"></td>
          </tr>

          <tr>
            <th scope="row">
              <span>Storage total </span>
            </th>
            <td>
              <span>Up to 1 GB</span>
            </td>
            <td>
              <span>Up to 100 GB</span>
            </td>
          </tr>
          <tr>
            <th scope="row">
              <span>Transfer limits </span>
              <span data-tip="Good news, only download operations are counted towards the limit">
                ❓
              </span>
            </th>
            <td>
              <span>Up to 2 GB</span>
            </td>
            <td>
              <span>Up to 200 GB</span>
            </td>
          </tr>

          <tr>
            <th scope="colgroup">
              <div className="sbui-space-row sbui-space-x-4">
                <h4 className="sbui-typography-title m-0">Dashboard</h4>
              </div>
            </th>
            <td className="pricing-table__product-row bg-gray-50 dark:bg-dark-700 py-5 px-6"></td>
            <td className="pricing-table__product-row bg-gray-50 dark:bg-dark-700 py-5 px-6"></td>
            <td className="pricing-table__product-row bg-gray-50 dark:bg-dark-700 py-5 px-6"></td>
          </tr>

          <tr>
            <th scope="row">
              <span>Team members </span>
            </th>
            <td>
              <span>Unlimited</span>
            </td>
            <td>
              <span>Unlimited</span>
            </td>
          </tr>

          <tr>
            <th scope="row">
              <span>Access controls </span>
            </th>
            <td>
              〰️
              <span>Not included in </span>
            </td>
            <td>
              <span>Coming soon</span>
            </td>
          </tr>

          <tr>
            <th scope="row">
              <span>Audit trails </span>
            </th>
            <td>
              〰️
              <span>Not included in </span>
            </td>
            <td>
              〰️
              <span>Not included in </span>
            </td>
          </tr>

          <tr>
            <th scope="colgroup">
              <div className="sbui-space-row sbui-space-x-4">
                <h4 className="sbui-typography-title m-0">
                  Support and Compliance
                </h4>
              </div>
            </th>
            <td className="pricing-table__product-row bg-gray-50 dark:bg-dark-700 py-5 px-6"></td>
            <td className="pricing-table__product-row bg-gray-50 dark:bg-dark-700 py-5 px-6"></td>
          </tr>

          <tr>
            <th scope="row">
              <span>Community support </span>
            </th>
            <td>
              ✅<span>Included in </span>
            </td>
            <td>
              ✅<span>Included in </span>
            </td>
          </tr>

          <tr>
            <th scope="row">
              <span>Email support </span>
            </th>
            <td>
              〰️
              <span>Not included in </span>
            </td>
            <td>
              ✅<span>Included in </span>
            </td>
          </tr>

          <tr>
            <th scope="row">
              <span>Designated support </span>
            </th>
            <td>
              〰️
              <span>Not included in </span>
            </td>
            <td>
              〰️
              <span>Not included in </span>
            </td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <th scope="row">Choose your plan</th>
            <td>
              <a href="https://app.supabase.io">Get Started</a>
            </td>
            <td>
              <a href="https://app.supabase.io">Get Started</a>
            </td>
          </tr>
        </tfoot>
      </table>
    )
  }
