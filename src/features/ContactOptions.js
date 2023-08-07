import { Container } from "reactstrap";

function ContactOptions () {
    return (
        <>
            <div className="row row-content mt-5 mb-5 text-white">
                <div className="ml-5 mb-5">
                    <h5>Contact Options</h5>
                    <div>
                        <a className='btn btn-social-icon btn-outline-warning mr-5' href='http://instagram.com/'>
                            <i className='fa fa-instagram' />
                        </a>
                        <a className='btn btn-social-icon btn-outline-warning mr-2' href='http://www.facebook.com/'>
                            <i className='fa fa-facebook' />
                        </a>
                        <a className='btn btn-social-icon btn-outline-warning mr-2' href='http://twitter.com/'>
                            <i className='fa fa-twitter' />
                        </a>
                        <a className='btn btn-social-icon btn-outline-warning' href='http://youtube.com/'>
                            <i className='fa fa-youtube' />
                        </a>
                        <a className='btn btn-social-icon btn-outline-warning' href="mailto:campsites@nucamp.co">
                            <i className="fa fa-envelope-o"/> 
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ContactOptions;