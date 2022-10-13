

const ExcursionTime = (props) => {
   return (
      <ExcursionTimeItems>
      <IconItem src={props.iconSrc} />
         <div>
            значок часов
         </div>
         <div> 2 часа текст </div>
      </ExcursionTimeItems>
   )
}

export default ExcursionTime;