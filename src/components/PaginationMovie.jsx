import Pagination from "rc-pagination"
import "../sass/Pagination.scss"

const PaginationMovie = ({ currentPage, totalItems, onChangePage }) => {
  return (
    <Pagination 
      className="pagination"
      current={currentPage}
      total={totalItems}
      pageSize={20}
      onChange={onChangePage}
    />
  )
}
export default PaginationMovie