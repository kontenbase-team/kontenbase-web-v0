interface TableComparisonProps {}

export const TableComparison: React.FunctionComponent<TableComparisonProps> =
  () => {
    return (
      <table>
        <caption>Pricing plan comparison</caption>

        <thead>
          <tr>
            <th scope="col">
              <span>Plans</span>
            </th>
            <th scope="col">
              <h4>Free</h4>
            </th>
            <th scope="col">
              <h4>Pro</h4>
            </th>
            <th scope="col">
              <h4>Pay as you go</h4>
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
            <td>
              <div>
                <p>$30 /project /month</p>
                <p>Perfect for hobby projects and experiments.</p>
                <a href="https://app.supabase.io">Get started</a>
              </div>
            </td>
          </tr>

          <tr>
            <th scope="colgroup">
              <div>
                <div>🔵</div>
                <h4 className="sbui-typography-title m-0">Database</h4>
              </div>
            </th>
            <td className="pricing-table__product-row bg-gray-50 dark:bg-dark-700 py-5 px-6"></td>
            <td className="pricing-table__product-row bg-gray-50 dark:bg-dark-700 py-5 px-6"></td>
            <td className="pricing-table__product-row bg-gray-50 dark:bg-dark-700 py-5 px-6"></td>
          </tr>
          <tr className="divide-x dark:divide-gray-600">
            <th
              className="flex items-center py-5 px-6 text-sm font-normal text-gray-500 dark:text-gray-300 text-left"
              scope="row"
            >
              <span>Dedicated Postgres Database </span>
              <span
                className="ml-2 cursor-pointer hover:text-gray-800 dark:hover:text-white"
                data-tip="A Postgres database with no restrictions? You get it. No pseudo limited users, you are the postgres root user.  No caveats."
              >
                ❓
              </span>
            </th>
            <td className="py-5 px-6">
              ✅<span className="sr-only">Included in </span>
            </td>
            <td className="py-5 px-6">
              ✅<span className="sr-only">Included in </span>
            </td>
            <td className="py-5 px-6">
              ✅<span className="sr-only">Included in </span>
            </td>
          </tr>
          <tr className="divide-x dark:divide-gray-600">
            <th
              className="flex items-center py-5 px-6 text-sm font-normal text-gray-500 dark:text-gray-300 text-left"
              scope="row"
            >
              <span>Unlimited API requests </span>
            </th>
            <td className="py-5 px-6">
              ✅<span className="sr-only">Included in </span>
            </td>
            <td className="py-5 px-6">
              ✅<span className="sr-only">Included in </span>
            </td>
            <td className="py-5 px-6">
              ✅<span className="sr-only">Included in </span>
            </td>
          </tr>
          <tr className="divide-x dark:divide-gray-600">
            <th
              className="flex items-center py-5 px-6 text-sm font-normal text-gray-500 dark:text-gray-300 text-left"
              scope="row"
            >
              <span>Realtime functionality </span>
            </th>
            <td className="py-5 px-6">
              ✅<span className="sr-only">Included in </span>
            </td>
            <td className="py-5 px-6">
              ✅<span className="sr-only">Included in </span>
            </td>
            <td className="py-5 px-6">
              ✅<span className="sr-only">Included in </span>
            </td>
          </tr>
          <tr className="divide-x dark:divide-gray-600">
            <th
              className="flex items-center py-5 px-6 text-sm font-normal text-gray-500 dark:text-gray-300 text-left"
              scope="row"
            >
              <span>Optimized database instances </span>
              <span
                className="ml-2 cursor-pointer hover:text-gray-800 dark:hover:text-white"
                data-tip="Why? Unique workload requirements, heavy reads and writes, compliance"
              >
                ❓
              </span>
            </th>
            <td className="py-5 px-6">
              〰️
              <span className="sr-only">Not included in </span>
            </td>
            <td className="py-5 px-6">
              〰️
              <span className="sr-only">Not included in </span>
            </td>
            <td className="py-5 px-6">
              <span className="block text-sm text-gray-700 dark:text-white">
                Starting from $50/month
              </span>
            </td>
          </tr>
          <tr className="divide-x dark:divide-gray-600">
            <th
              className="flex items-center py-5 px-6 text-sm font-normal text-gray-500 dark:text-gray-300 text-left"
              scope="row"
            >
              <span>Database space </span>
            </th>
            <td className="py-5 px-6">
              <span className="block text-sm text-gray-700 dark:text-white">
                Up to 500 MB
              </span>
            </td>
            <td className="py-5 px-6">
              <span className="block text-sm text-gray-700 dark:text-white">
                Up to 8 GB
              </span>
            </td>
            <td className="py-5 px-6">
              <span className="block text-sm text-gray-700 dark:text-white">
                $0.125 per GB
              </span>
            </td>
          </tr>
          <tr className="divide-x dark:divide-gray-600">
            <th
              className="flex items-center py-5 px-6 text-sm font-normal text-gray-500 dark:text-gray-300 text-left"
              scope="row"
            >
              <span>Automatic backups </span>
              <span
                className="ml-2 cursor-pointer hover:text-gray-800 dark:hover:text-white"
                data-tip="Backups are entire copies of your database that can be restored in the future."
              >
                ❓
              </span>
            </th>
            <td className="py-5 px-6">
              〰️
              <span className="sr-only">Not included in </span>
            </td>
            <td className="py-5 px-6">
              <span className="block text-sm text-gray-700 dark:text-white">
                7 days of backup
              </span>
            </td>
            <td className="py-5 px-6">
              <span className="block text-sm text-gray-700 dark:text-white">
                30 days Point in Time backup
              </span>
            </td>
          </tr>
          <tr className="divide-x dark:divide-gray-600">
            <th
              className="flex items-center py-5 px-6 text-sm font-normal text-gray-500 dark:text-gray-300 text-left"
              scope="row"
            >
              <span>Pausing </span>
              <span
                className="ml-2 cursor-pointer hover:text-gray-800 dark:hover:text-white"
                data-tip="Unused projects that have no activity or API requests will be shut down. They can be reactivated by logging into the dashboard"
              >
                ❓
              </span>
            </th>
            <td className="py-5 px-6">
              <span className="block text-sm text-gray-700 dark:text-white">
                Paused after 1 week inactivity
              </span>
            </td>
            <td className="py-5 px-6">
              <span className="block text-sm text-gray-700 dark:text-white">
                Never
              </span>
            </td>
            <td className="py-5 px-6">
              <span className="block text-sm text-gray-700 dark:text-white">
                Never
              </span>
            </td>
          </tr>
          <tr className="divide-x dark:divide-gray-600">
            <th
              className="flex items-center py-5 px-6 text-sm font-normal text-gray-500 dark:text-gray-300 text-left"
              scope="row"
            >
              <span>Transfer limits </span>
              <span
                className="ml-2 cursor-pointer hover:text-gray-800 dark:hover:text-white"
                data-tip="Good news, only download operations are counted towards the limit"
              >
                ❓
              </span>
            </th>
            <td className="py-5 px-6">
              <span className="block text-sm text-gray-700 dark:text-white">
                Up to 2GB
              </span>
            </td>
            <td className="py-5 px-6">
              <span className="block text-sm text-gray-700 dark:text-white">
                Up to 50GB
              </span>
            </td>
            <td className="py-5 px-6">
              <span className="block text-sm text-gray-700 dark:text-white">
                $0.09 per GB
              </span>
            </td>
          </tr>
          <div
            className="__react_component_tooltip tbb294467-bacc-44be-a30d-071270d7cb1c place-top type-dark"
            id="tbb294467-bacc-44be-a30d-071270d7cb1c"
            data-id="tooltip"
          ></div>
          <tr className="divide-x dark:divide-gray-600">
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
          <tr className="divide-x dark:divide-gray-600">
            <th
              className="flex items-center py-5 px-6 text-sm font-normal text-gray-500 dark:text-gray-300 text-left"
              scope="row"
            >
              <span>Users </span>
            </th>
            <td className="py-5 px-6">
              <span className="block text-sm text-gray-700 dark:text-white">
                10,000 Users
              </span>
            </td>
            <td className="py-5 px-6">
              <span className="block text-sm text-gray-700 dark:text-white">
                100,000 Users
              </span>
            </td>
            <td className="py-5 px-6">
              <span className="block text-sm text-gray-700 dark:text-white">
                Unlimited
              </span>
            </td>
          </tr>
          <tr className="divide-x dark:divide-gray-600">
            <th
              className="flex items-center py-5 px-6 text-sm font-normal text-gray-500 dark:text-gray-300 text-left"
              scope="row"
            >
              <span>Social OAuth providers </span>
            </th>
            <td className="py-5 px-6">
              ✅<span className="sr-only">Included in </span>
            </td>
            <td className="py-5 px-6">
              ✅<span className="sr-only">Included in </span>
            </td>
            <td className="py-5 px-6">
              ✅<span className="sr-only">Included in </span>
            </td>
          </tr>
          <tr className="divide-x dark:divide-gray-600">
            <th
              className="flex items-center py-5 px-6 text-sm font-normal text-gray-500 dark:text-gray-300 text-left"
              scope="row"
            >
              <span>Custom SMTP server </span>
            </th>
            <td className="py-5 px-6">
              ✅<span className="sr-only">Included in </span>
            </td>
            <td className="py-5 px-6">
              ✅<span className="sr-only">Included in </span>
            </td>
            <td className="py-5 px-6">
              ✅<span className="sr-only">Included in </span>
            </td>
          </tr>
          <tr className="divide-x dark:divide-gray-600">
            <th
              className="flex items-center py-5 px-6 text-sm font-normal text-gray-500 dark:text-gray-300 text-left"
              scope="row"
            >
              <span>Remove Supabase branding from emails </span>
            </th>
            <td className="py-5 px-6">
              〰️
              <span className="sr-only">Not included in </span>
            </td>
            <td className="py-5 px-6">
              ✅<span className="sr-only">Included in </span>
            </td>
            <td className="py-5 px-6">
              ✅<span className="sr-only">Included in </span>
            </td>
          </tr>
          <tr className="divide-x dark:divide-gray-600">
            <th
              className="flex items-center py-5 px-6 text-sm font-normal text-gray-500 dark:text-gray-300 text-left"
              scope="row"
            >
              <span>Enterprise OAuth providers </span>
            </th>
            <td className="py-5 px-6">
              〰️
              <span className="sr-only">Not included in </span>
            </td>
            <td className="py-5 px-6">
              〰️
              <span className="sr-only">Not included in </span>
            </td>
            <td className="py-5 px-6">
              ✅<span className="sr-only">Included in </span>
            </td>
          </tr>
          <tr className="divide-x dark:divide-gray-600">
            <th
              className="flex items-center py-5 px-6 text-sm font-normal text-gray-500 dark:text-gray-300 text-left"
              scope="row"
            >
              <span>Audit trails </span>
            </th>
            <td className="py-5 px-6">
              <span className="block text-sm text-gray-700 dark:text-white">
                1 hour
              </span>
            </td>
            <td className="py-5 px-6">
              <span className="block text-sm text-gray-700 dark:text-white">
                7 days
              </span>
            </td>
            <td className="py-5 px-6">
              ✅<span className="sr-only">Included in </span>
            </td>
          </tr>
          <div
            className="__react_component_tooltip tfdc67166-9d62-4358-9978-6d77b8a426fd place-top type-dark"
            id="tfdc67166-9d62-4358-9978-6d77b8a426fd"
            data-id="tooltip"
          ></div>
          <tr className="divide-x dark:divide-gray-600">
            <th
              className="pricing-table__product-row bg-gray-50 dark:bg-gray-700 py-3 pl-6 text-sm font-medium text-gray-900 dark:text-white text-left"
              scope="colgroup"
            >
              <div className="sbui-space-row sbui-space-x-4">
                <div className="inline-flex items-center justify-center rounded-md bg-gray-800 dark:bg-white text-white h-8 w-8">
                  🔵
                </div>
                <h4 className="sbui-typography-title m-0">Object storage</h4>
              </div>
            </th>
            <td className="pricing-table__product-row bg-gray-50 dark:bg-dark-700 py-5 px-6"></td>
            <td className="pricing-table__product-row bg-gray-50 dark:bg-dark-700 py-5 px-6"></td>
            <td className="pricing-table__product-row bg-gray-50 dark:bg-dark-700 py-5 px-6"></td>
          </tr>
          <tr className="divide-x dark:divide-gray-600">
            <th
              className="flex items-center py-5 px-6 text-sm font-normal text-gray-500 dark:text-gray-300 text-left"
              scope="row"
            >
              <span>Storage total </span>
            </th>
            <td className="py-5 px-6">
              <span className="block text-sm text-gray-700 dark:text-white">
                Up to 1 GB
              </span>
            </td>
            <td className="py-5 px-6">
              <span className="block text-sm text-gray-700 dark:text-white">
                Up to 100 GB
              </span>
            </td>
            <td className="py-5 px-6">
              <span className="block text-sm text-gray-700 dark:text-white">
                $0.021 per GB
              </span>
            </td>
          </tr>
          <tr className="divide-x dark:divide-gray-600">
            <th
              className="flex items-center py-5 px-6 text-sm font-normal text-gray-500 dark:text-gray-300 text-left"
              scope="row"
            >
              <span>Transfer limits </span>
              <span
                className="ml-2 cursor-pointer hover:text-gray-800 dark:hover:text-white"
                data-tip="Good news, only download operations are counted towards the limit"
              >
                ❓
              </span>
            </th>
            <td className="py-5 px-6">
              <span className="block text-sm text-gray-700 dark:text-white">
                Up to 2 GB
              </span>
            </td>
            <td className="py-5 px-6">
              <span className="block text-sm text-gray-700 dark:text-white">
                Up to 200 GB
              </span>
            </td>
            <td className="py-5 px-6">
              <span className="block text-sm text-gray-700 dark:text-white">
                $0.09 per GB
              </span>
            </td>
          </tr>
          <tr className="divide-x dark:divide-gray-600">
            <th
              className="flex items-center py-5 px-6 text-sm font-normal text-gray-500 dark:text-gray-300 text-left"
              scope="row"
            >
              <span>Custom access controls </span>
            </th>
            <td className="py-5 px-6">
              ✅<span className="sr-only">Included in </span>
            </td>
            <td className="py-5 px-6">
              ✅<span className="sr-only">Included in </span>
            </td>
            <td className="py-5 px-6">
              ✅<span className="sr-only">Included in </span>
            </td>
          </tr>
          <div
            className="__react_component_tooltip t01228ae1-3232-4e54-b6e8-ccbe941beda6 place-top type-dark"
            id="t01228ae1-3232-4e54-b6e8-ccbe941beda6"
            data-id="tooltip"
          ></div>
          <tr className="divide-x dark:divide-gray-600">
            <th
              className="pricing-table__product-row bg-gray-50 dark:bg-gray-700 py-3 pl-6 text-sm font-medium text-gray-900 dark:text-white text-left"
              scope="colgroup"
            >
              <div className="sbui-space-row sbui-space-x-4">
                <h4 className="sbui-typography-title m-0">Dashboard</h4>
              </div>
            </th>
            <td className="pricing-table__product-row bg-gray-50 dark:bg-dark-700 py-5 px-6"></td>
            <td className="pricing-table__product-row bg-gray-50 dark:bg-dark-700 py-5 px-6"></td>
            <td className="pricing-table__product-row bg-gray-50 dark:bg-dark-700 py-5 px-6"></td>
          </tr>
          <tr className="divide-x dark:divide-gray-600">
            <th
              className="flex items-center py-5 px-6 text-sm font-normal text-gray-500 dark:text-gray-300 text-left"
              scope="row"
            >
              <span>Team members </span>
            </th>
            <td className="py-5 px-6">
              <span className="block text-sm text-gray-700 dark:text-white">
                Unlimited
              </span>
            </td>
            <td className="py-5 px-6">
              <span className="block text-sm text-gray-700 dark:text-white">
                Unlimited
              </span>
            </td>
            <td className="py-5 px-6">
              <span className="block text-sm text-gray-700 dark:text-white">
                Unlimited
              </span>
            </td>
          </tr>
          <tr className="divide-x dark:divide-gray-600">
            <th
              className="flex items-center py-5 px-6 text-sm font-normal text-gray-500 dark:text-gray-300 text-left"
              scope="row"
            >
              <span>Access controls </span>
            </th>
            <td className="py-5 px-6">
              〰️
              <span className="sr-only">Not included in </span>
            </td>
            <td className="py-5 px-6">
              <span className="block text-sm text-gray-700 dark:text-white">
                Coming soon
              </span>
            </td>
            <td className="py-5 px-6">
              ✅<span className="sr-only">Included in </span>
            </td>
          </tr>
          <tr className="divide-x dark:divide-gray-600">
            <th
              className="flex items-center py-5 px-6 text-sm font-normal text-gray-500 dark:text-gray-300 text-left"
              scope="row"
            >
              <span>Audit trails </span>
            </th>
            <td className="py-5 px-6">
              〰️
              <span className="sr-only">Not included in </span>
            </td>
            <td className="py-5 px-6">
              〰️
              <span className="sr-only">Not included in </span>
            </td>
            <td className="py-5 px-6">
              ✅<span className="sr-only">Included in </span>
            </td>
          </tr>
          <div
            className="__react_component_tooltip ta0988ba9-b7cb-4b93-a14c-d86f277116df place-top type-dark"
            id="ta0988ba9-b7cb-4b93-a14c-d86f277116df"
            data-id="tooltip"
          ></div>
          <tr className="divide-x dark:divide-gray-600">
            <th
              className="pricing-table__product-row bg-gray-50 dark:bg-gray-700 py-3 pl-6 text-sm font-medium text-gray-900 dark:text-white text-left"
              scope="colgroup"
            >
              <div className="sbui-space-row sbui-space-x-4">
                <h4 className="sbui-typography-title m-0">
                  Support and Compliance
                </h4>
              </div>
            </th>
            <td className="pricing-table__product-row bg-gray-50 dark:bg-dark-700 py-5 px-6"></td>
            <td className="pricing-table__product-row bg-gray-50 dark:bg-dark-700 py-5 px-6"></td>
            <td className="pricing-table__product-row bg-gray-50 dark:bg-dark-700 py-5 px-6"></td>
          </tr>
          <tr className="divide-x dark:divide-gray-600">
            <th
              className="flex items-center py-5 px-6 text-sm font-normal text-gray-500 dark:text-gray-300 text-left"
              scope="row"
            >
              <span>Community support </span>
            </th>
            <td className="py-5 px-6">
              ✅<span className="sr-only">Included in </span>
            </td>
            <td className="py-5 px-6">
              ✅<span className="sr-only">Included in </span>
            </td>
            <td className="py-5 px-6">
              ✅<span className="sr-only">Included in </span>
            </td>
          </tr>
          <tr className="divide-x dark:divide-gray-600">
            <th
              className="flex items-center py-5 px-6 text-sm font-normal text-gray-500 dark:text-gray-300 text-left"
              scope="row"
            >
              <span>Email support </span>
            </th>
            <td className="py-5 px-6">
              〰️
              <span className="sr-only">Not included in </span>
            </td>
            <td className="py-5 px-6">
              ✅<span className="sr-only">Included in </span>
            </td>
            <td className="py-5 px-6">
              ✅<span className="sr-only">Included in </span>
            </td>
          </tr>
          <tr className="divide-x dark:divide-gray-600">
            <th
              className="flex items-center py-5 px-6 text-sm font-normal text-gray-500 dark:text-gray-300 text-left"
              scope="row"
            >
              <span>Designated support </span>
            </th>
            <td className="py-5 px-6">
              〰️
              <span className="sr-only">Not included in </span>
            </td>
            <td className="py-5 px-6">
              〰️
              <span className="sr-only">Not included in </span>
            </td>
            <td className="py-5 px-6">
              ✅<span className="sr-only">Included in </span>
            </td>
          </tr>
          <tr className="divide-x dark:divide-gray-600">
            <th
              className="flex items-center py-5 px-6 text-sm font-normal text-gray-500 dark:text-gray-300 text-left"
              scope="row"
            >
              <span>On Premises / BYO cloud </span>
            </th>
            <td className="py-5 px-6">
              〰️
              <span className="sr-only">Not included in </span>
            </td>
            <td className="py-5 px-6">
              〰️
              <span className="sr-only">Not included in </span>
            </td>
            <td className="py-5 px-6">
              ✅<span className="sr-only">Included in </span>
            </td>
          </tr>
          <tr className="divide-x dark:divide-gray-600">
            <th
              className="flex items-center py-5 px-6 text-sm font-normal text-gray-500 dark:text-gray-300 text-left"
              scope="row"
            >
              <span>Log retention (API &amp; Database) </span>
            </th>
            <td className="py-5 px-6">
              <span className="block text-sm text-gray-700 dark:text-white">
                1 day
              </span>
            </td>
            <td className="py-5 px-6">
              <span className="block text-sm text-gray-700 dark:text-white">
                7 days
              </span>
            </td>
            <td className="py-5 px-6">
              <span className="block text-sm text-gray-700 dark:text-white">
                3 months
              </span>
            </td>
          </tr>
          <tr className="divide-x dark:divide-gray-600">
            <th
              className="flex items-center py-5 px-6 text-sm font-normal text-gray-500 dark:text-gray-300 text-left"
              scope="row"
            >
              <span>Log drain </span>
            </th>
            <td className="py-5 px-6">
              〰️
              <span className="sr-only">Not included in </span>
            </td>
            <td className="py-5 px-6">
              〰️
              <span className="sr-only">Not included in </span>
            </td>
            <td className="py-5 px-6">
              <span className="block text-sm text-gray-700 dark:text-white">
                Coming soon
              </span>
            </td>
          </tr>
          <tr className="divide-x dark:divide-gray-600">
            <th
              className="flex items-center py-5 px-6 text-sm font-normal text-gray-500 dark:text-gray-300 text-left"
              scope="row"
            >
              <span>SOC2 </span>
            </th>
            <td className="py-5 px-6">
              〰️
              <span className="sr-only">Not included in </span>
            </td>
            <td className="py-5 px-6">
              〰️
              <span className="sr-only">Not included in </span>
            </td>
            <td className="py-5 px-6">
              <span className="block text-sm text-gray-700 dark:text-white">
                Coming soon
              </span>
            </td>
          </tr>
          <div
            className="__react_component_tooltip t80194388-794f-4211-a3e5-84fa6b834d6c place-top type-dark"
            id="t80194388-794f-4211-a3e5-84fa6b834d6c"
            data-id="tooltip"
          ></div>
        </tbody>
        <tfoot>
          <tr className="border-t border-gray-200 dark:border-gray-600">
            <th className="sr-only" scope="row">
              Choose your plan
            </th>
            <td className="pt-5 px-6">
              <a href="https://app.supabase.io">
                <span className="sbui-btn-container sbui-btn--w-full">
                  <button className="sbui-btn sbui-btn-outline sbui-btn--w-full sbui-btn-container--shadow sbui-btn--medium sbui-btn--text-align-center">
                    <span>Get started</span>
                  </button>
                </span>
              </a>
            </td>
            <td className="pt-5 px-6">
              <a href="https://app.supabase.io">
                <span className="sbui-btn-container sbui-btn--w-full">
                  <button className="sbui-btn sbui-btn-outline sbui-btn--w-full sbui-btn-container--shadow sbui-btn--medium sbui-btn--text-align-center">
                    <span>Get started</span>
                  </button>
                </span>
              </a>
            </td>
            <td className="pt-5 px-6">
              <a href="mailto:support@supabase.io">
                <span className="sbui-btn-container sbui-btn--w-full">
                  <button className="sbui-btn sbui-btn-outline sbui-btn--w-full sbui-btn-container--shadow sbui-btn--medium sbui-btn--text-align-center">
                    <span>Contact us</span>
                  </button>
                </span>
              </a>
            </td>
          </tr>
        </tfoot>
      </table>
    )
  }

export default TableComparison
