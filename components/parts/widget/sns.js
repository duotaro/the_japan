export const databaseId = process.env.NOTION_DATABASE_ID;
import POPULAR from '../popular/list.js'
import RECOMMEND from '../recommend/list.js'
export default function Sns({ }) {
  return (
    <>
      <div className="card h-100">
          <div className="card-body p-4">
          <div className="text-center border-bottom">
          </div>
              <table className="table ">
                  <tbody >
                      {POPULAR_LIST.map((popular, index) => {
                      return (
                      <tr className="list-unstyled" key={popular.title}>
                          <th>{index+1}</th>
                          <td>
                          <a className="link-black "  aria-current="page" href={popular.url}>
                              {popular.title}
                          </a>
                          </td>
                      </tr>
                      )
                      })}
                  </tbody>
              </table>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          </div>
      </div>
    </>
  );
}