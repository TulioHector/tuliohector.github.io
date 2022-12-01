import { Component } from "react";
import { PageContext } from '../components/context';
import PageHeader from '../components/PageHeader';
import SeoHeader from '../components/seoHeader';

class About extends Component {
    static contextType = PageContext;

    constructor(props, context) {
        super(props);
        let pageConfig = context.pageSettings;
        pageConfig.backgroundImage = "url('assets/img/about-bg.jpg')";
        pageConfig.pageTitle = "About Me";
        pageConfig.pageSubTitle = "";
        context.setPageSettings(pageConfig);

        this.state = {
            headers: [
                {property: "og:locale", content: "es_AR"},
                {property: "og:type", content: "website"},
                {property: "og:title", content: "Blog – Technology"},
                {property: "og:description", content: "Looking for "},
                {property: "og:url", content: "https://tuliohector.github.io/"},
                {property: "og:site_name", content: "Hector Romano Blog"},
            ],
            headerTitle: "Blog – Technology / Contact me",
            description: "Blog about Technology and architecture-> Contact me"
        };
    }

    render() {
        return (
            <>
            <PageHeader />
            <SeoHeader metatags={this.state.headers} title={this.state.headerTitle} description={this.state.description}/>
            <main className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <p>Hace más de 6 años se desempeña como arquitecto de soluciones participando en equipos multidisciplinarios generando desafíos técnicos en diferentes tipos de negocio.</p>
                            <p>Cuenta con experiencia en el sector financiero. Le interesan las nuevas tecnologías, la innovación, la investigación, la arquitectura de soluciones.</p>
                            <p>Le gusta capacitarse y transmitir experiencia al equipo de trabajo y aprender de la experiencia de colegas. Actualmente se interesa poder avanzar a arquitectura empresarial.</p>
                        </div>
                    </div>
                </div>
            </main>
            </>
        );
    }
};

export default About;