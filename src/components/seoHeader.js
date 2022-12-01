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
             {/* <meta name="author" content="Hector Abraham Romano" />
             <meta property="og:locale" content="es_AR" data-react-helmet="true" />
             <meta property="og:type" content="website" data-react-helmet="true" />
             <meta property="og:title" content="Blog – Technology" data-react-helmet="true" />
             <meta property="og:description" content="Looking for " data-react-helmet="true" />
             <meta property="og:url" content="https://tuliohector.github.io/" data-react-helmet="true" />
             <meta property="og:site_name" content="Hector Romano Blog" data-react-helmet="true" />
             <meta name="description" content="Blog about Technology and architecture" /> */}
        </Helmet>
    );
}

export default SeoHeader;