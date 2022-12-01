import { Helmet } from 'react-helmet-async';

const SeoHeader = (metatags) => {
    return (
        <Helmet>
            <title>{metatags.title}</title>
            <meta name="description" content={metatags.description} />
            <meta name="author" content="Hector Abraham Romano" />
            {
                metatags.metatags.map((item, i) => (
                    <meta property={item.property} content={item.content} data-react-helmet="true" />        
                ))
            }
        </Helmet>
    );
}

export default SeoHeader;