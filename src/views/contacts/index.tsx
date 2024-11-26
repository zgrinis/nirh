import './contacts.scss';

import { useViewContext } from "../../contexts/view"

export function ViewContacts(){
    const {setView} = useViewContext();
    return <div className="view view-contacts container">
        <h1 className='view-heading'>Links and contacts</h1>
        <section className="text-center">
            <a
                href="https://github.com/zgrinis/nirh"
                target="_blank"
                className="btn-neon --primary"
            >
                <div className="view-contacts-item">
                    <i className="icon-github"></i>
                    <span>Link to this site's repository</span>
                </div>
            </a>
            <a
                href="https://linkedin.com"
                target="_blank"
                className="btn-neon --primary"
            >
                <div className="view-contacts-item">
                    <i className="icon-linkedin"></i>
                    <span>Linked in</span>
                </div>
            </a>
        </section>
        <section>
            <h2 className="view-heading">
                Contact me
            </h2>

            <p className='text-center'>
                Form under construction
            </p>
        </section>
    </div>
}