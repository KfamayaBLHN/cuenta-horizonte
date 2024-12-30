import React from 'react'

const Breadcrumbs =  ({items}) => {
  return <section className='breadcrumbs'>
    <div className="container-fluid">
      <div className="row">
        <div className='col-11'>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              { items.map((item, i)=>{
                  if ( item.url ) {
                    if ( item.url != '#' ) {
                      return <li className="breadcrumb-item" key={i}><a href={item.url}>{item.label}</a></li>
                    } else {
                      return <li className="breadcrumb-item active" aria-current="page" key={i}>{item.label}</li>;
                    }
                  } else {
                    return <li className="breadcrumb-item active" aria-current="page" key={i}>{item.label}</li>;
                  }
                })
              }
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
}

export default Breadcrumbs;