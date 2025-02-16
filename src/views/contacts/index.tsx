import './contacts.scss';

export function ViewContacts(){
    return <div className="view view-contacts container">
        <h1 className='view-heading underlined'>Links and contacts</h1>
        <section className="text-center">
            <div className='view-contacts-heading'>
                Link to this site's repository
            </div>
            <a
                href="https://github.com/zgrinis/nirh"
                target="_blank"
                className="btn-neon --primary"
            >
                <div className="view-contacts-item">
                    <i className="icon-github"></i>
                    <span>Github</span>
                </div>
            </a>
          
        </section>
        <section>
            <div className='view-contacts-heading'>
                Contact me
            </div>

            <a
                href="https://linkedin.com/in/žygimantas-grinis-95504632a"
                target="_blank"
                className="btn-neon --primary"
            >
                <div className="view-contacts-item">
                    <i className="icon-linkedin"></i>
                    <span>Linked in</span>
                </div>
            </a>
        </section>
    </div>
}