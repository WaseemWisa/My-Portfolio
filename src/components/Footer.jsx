import React from 'react'
import '../Styles/components/footer.scss'

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id='footer'>
      <div className="container">
        <div className='top'>
          <div className="l-side">
            <h4>Waseem Wisa</h4>
            <p>
              A Frontend focused Web Developer building the Frontend of Websites  
              and Web Applications that leads to the success of the overall product
            </p>
          </div>
          <div className="r-side">
            <span>SOCIAL</span>
            <div>
              <a href="https://www.facebook.com/profile.php?id=100078110840927"><i class="bi bi-facebook"></i></a>
              <a href="https://twitter.com/Waseem91701711"><i class="bi bi-twitter-x"></i></a>
              <a href="https://github.com/WaseemWisa"><i class="bi bi-github"></i></a>
            </div>
          </div>
        </div>
        <div className='line'></div>
        <div className='bottom'>
          &copy; Copyright {year}. Made by <a href="">Waseem Wisa</a> 
        </div>
      </div>
    </footer>
  )
}

export default Footer