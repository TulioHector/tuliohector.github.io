import { useEffect, useState } from 'react';
import { pageConfig } from '../components/context';

const PageHeader = () => {
    const [headerConf, setHeaderConf] = useState('');
    
    useEffect(() => {
        setHeaderConf(pageConfig);
    }, [headerConf]);
    return (
        <header className="masthead" style={{ backgroundImage: headerConf.backgroundImage }}>
            <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="site-heading">
                            <h1>{headerConf.pageTitle}</h1>
                            <span className="subheading">{headerConf.pageSubTitle}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default PageHeader;