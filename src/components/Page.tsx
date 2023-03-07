import '../pages/styles/page.scss'

interface PageNumberProps {
    id: number
    handleClick: (id: number) => void
    className: String
}
//rendering pagination elements
export const Page = ({id, handleClick, className}: PageNumberProps) => {
  return (
    <div className={className != "" ? 'page ' + className: 'page'} onClick={() => handleClick(id)}>
      {id}
    </div>
  )
}
