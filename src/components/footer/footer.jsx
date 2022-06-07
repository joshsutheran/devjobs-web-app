import './footer.css'

const Footer = (props) => {
    return (
        <div className='footer'>
            <div className="footer__info">
                <h4 className='footer__info-title'>{props.job.position}</h4>
                <h4 className='footer__info-company'>{props.job.company}</h4>
            </div>
            <div className="footer__info-btn">
                <button onClick={(() => alert('Job Application Would Open!'))} className='btn__style'>Apply Now</button>
            </div>
        </div>
    )
}

export default Footer;