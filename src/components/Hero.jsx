import React from 'react'

const Hero = () => {
  return (
    <div>
      <div class="bg-dark text-secondary px-4 py-5 text-center " style={{height:"90vh",backgroundImage:"url(https://i.pinimg.com/originals/ea/55/bd/ea55bde844c79a5e21c487ca8190f06a.jpg)"}} >
    <div class="py-5">
      <h1 class="display-5 fw-bold text-white">Dark color hero</h1>
      <div class="col-lg-6 mx-auto">
        <p class="fs-5 mb-4 text-white">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Custom button</button>
          <button type="button" class="btn btn-outline-light btn-lg px-4">Secondary</button>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Hero
