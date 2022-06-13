
const Pagination = ({postsPerPage, totalPost, paginate})=>{
  const Pagenumbers = []
  for(let i = 1; i <= Math.ceil(totalPost / postsPerPage ); i++){
    Pagenumbers.push(i);
  }
  return(
<nav>
<ul>
{
  Pagenumbers.map((number)=>{
    return <li key = {number}>
    <a onClick = {()=>paginate(number)} href = "!#">{number}</a>
    </li>
  })
}
</ul>
</nav>
  )
}

export default Pagination;