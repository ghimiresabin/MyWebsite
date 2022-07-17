import React from 'react'

const About = () => {
  return (
    <section id="about">
        <div class="container mt-4 pt-4">
            <h1 class="text-center">About Me</h1>
            <div class="row mt-4">
                <div class="col-lg-4">
                    <img src={require('./images/about.jpg')} class= "imageAboutPage" alt=""/>
                </div>

                <div class="col-lg-8">
                    <p> Every Night I Tell MySelf, Yes I Did Amazing Job Today
                        
                    </p>
                    <div class="row mt-3">
                        <div class="col-md-6">
                            <ul>
                                <li>Name:Sabin</li>
                                <li>Age: 25</li>
                                <li>Occupation: Developer and Creator</li>

                            </ul>
                        </div>
                        <div class="col-md-6">
                            <ul>
                                <li>Phone: +977 9816741628</li>
                                <li>Email: gsabin180@gmail.com</li>
                                <li>Address: Nepal</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About