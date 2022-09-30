function Dino(props) {
  return (
      <div className="card" style={{width: '100rem'}}>
              <div className="card-body">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw0crhwl_D_3R9MPpELFh2-0aAeyJhC1-ZNA&usqp=CAU" className="card-img-top" alt="..." style={{width: '50rem'}}/>
                  <h5 className="card-title">{props.creature.title}</h5>
                  <p className="card-text">{props.creature.author}</p>
                  <p className="card-text">{props.creature.body}</p>
                  <p className="card-text">{props.creature.comments[0]}</p>
              </div>
      </div>
  )
}

export default Dino;  