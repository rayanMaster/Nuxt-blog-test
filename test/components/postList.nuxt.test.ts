import {describe, expect, it, vi,beforeEach} from 'vitest'
import {mount} from "@vue/test-utils";
import {PostList} from "#components";
import {mountSuspended} from "@nuxt/test-utils/runtime";


describe('test ', () => {

    it('renders a greeting', async () => {
        const mockPostsData =
            [
                {
                    "image": "https://picsum.photos/seed/my-blog-post-572/1920/1080",
                    "title": "My Blog Post #572",
                    "publishedAt": 1711006222911,
                    "content": "\n      <p>Sophismata templum aptus deripio. Ventosus astrum sortitus decens desino. Cui conforto comptus thalassinus vulgivagus arbustum sordeo.</p>\n      <p>Usque eligendi vito error voveo vicinus. Ulciscor suscipit censura. Asporto dolorum subseco texo blandior verbera.</p>\n      <p>Dolore desipio pel. Careo aer caveo speciosus vero despecto eveniet. Absque vigilo contego calamitas ulciscor suscipit animi cernuus.</p>\n      <h2>Heading 2</h2>\n      <p>Corporis cavus sponte voluptates totidem tamdiu. Thymum suppono temptatio sustineo accusantium tibi adversus. Veritas tenus adeo quas deporto laboriosam contigo.</p>\n      <img src=\"https://picsum.photos/seed/my-blog-post-572-inner/1920/1080\">\n      <p>Argentum tego stultus debeo cursus. Voro audio celebrer tempus vallum deorsum victus artificiose cedo. Nulla ex conatus tracto aliquid ratione degenero vix deserunt turpis.</p>\n      <ol>\n        <li>Avarus desidero laudantium aliquam depopulo pax vallum distinctio amplexus vel.</li>\n        <li>Subnecto cubo tredecim terga denuncio terga occaecati tertius concido admoveo.</li>\n        <li>Crebro utique somnus summopere dedecor.</li>\n      </ol>\n      <p>Aegrus verbum abutor advenio solium defaeco asper utique recusandae spectaculum. Virtus varietas ut stella textus ustulo celebrer accusator crastinus. Copia considero depraedor curia ago velit spiculum voluptatum candidus.</p>\n      <p>Rem compello studio cohibeo vestrum patria quia sumo talus. Universe ater terebro clamo convoco nobis. Reiciendis solum defluo defendo comptus ara voco itaque.</p>\n      <p>Succedo despecto cupio. Provident aqua adinventitias aliquam somniculosus cibus articulus cinis tristis. Curis ver aestus clamo corpus.</p>\n      <p>Verbum arbitro comes corrigo. Terebro contego argentum degusto solum reprehenderit. Aeternus perspiciatis coniecto uter pecto desipio cinis denique.</p>\n      <p>Aspernatur thermae corrigo tondeo terreo. Theca animadverto viduo traho apostolus strues virgo. Vorax antiquus sollicito volutabrum qui tamen nobis ante.</p>\n<pre><code>const a = 1;\nconst b = 2;\nconst c = a + b;</code></pre>\n      <p>Undique arx asperiores cibus. Stillicidium veritas vesco arma curso suscipio. Nihil thymum demonstro cibo aspicio cuius consequatur spargo copia temeritas.</p>\n      <p>Consectetur virga subito universe. Alias demo suasoria bos toties desparatus hic subseco adflicto una. Validus quis averto accusamus.</p>\n      <p>Coepi cattus templum. Sequi cui defaeco doloremque delego animus. Vigilo depereo reprehenderit synagoga subvenio cubitum.</p>\n      <p>Degusto callide campana ipsa vita acervus tempora. Adsuesco amitto iste recusandae terreo agnitio acquiro aptus commemoro speculum. Sono aer confido arca crapula adhuc.</p>\n      <h2>Heading 2</h2>\n      <ul>\n        <li>Copia comparo sono acerbitas campana earum tantillus sopor.</li>\n        <li>Stella circumvenio curtus aspicio tredecim fugiat sublime vox derelinquo consequuntur.</li>\n        <li>Urbs sono una absens capitulus ipsum vapulus cupiditate.</li>\n      </ul>\n\n      <p>Numquam vaco vehemens demoror temperantia aptus vester pariatur venio. Sonitus appello vere vulariter. Compono atrox thymbra cruciamentum magni argentum tollo terra bestia cetera.</p>\n      <p>Cur apparatus denego vito. Traho utroque copiose cena sum depulso. In peior tenetur aeger tibi angulus alii artificiose carpo statim.</p>\n      <p>Comprehendo minus stella patria conicio ut aegrus thorax congregatio demens. Usitas quibusdam inflammatio celebrer porro voco delibero eum. Alioqui coerceo solium damno delectus tempore depono sint dens.</p>\n    ",
                    "excerpt": "Sophismata templum aptus deripio. Ventosus astrum sortitus decens desino. Cui conforto comptus thala...",
                    "id": "my-blog-post-572"
                },
                {
                    "image": "https://picsum.photos/seed/my-blog-post-691/1920/1080",
                    "title": "My Blog Post #691",
                    "publishedAt": 1711005240989,
                    "content": "\n      <p>Pauper ciminatio enim coaegresco sol utique spes tamen. Atrox terror thorax. Eum beatus curatio advoco.</p>\n      <p>Sopor creber ancilla synagoga subito absens vigilo cultellus. Arca sumo accedo vulnero tabesco demergo. Sapiente amita arcus ambulo agnitio callide calco atqui.</p>\n      <p>Defleo viscus altus trado nulla vicissitudo vulgo censura quam alveus. Sumo spiculum aperio vitae comparo molestiae crastinus ademptio cubitum crepusculum. Sumptus censura suadeo.</p>\n      <h2>Heading 2</h2>\n      <p>Verbera stillicidium patria audax copiose vulgaris contigo utilis copiose. Absum thesaurus praesentium fugit ager derideo modi. Suasoria volup volo triduana temporibus.</p>\n      <img src=\"https://picsum.photos/seed/my-blog-post-691-inner/1920/1080\">\n      <p>Supra audeo desidero basium ventosus eius auxilium. Magni conicio speculum vesco sed. Caste approbo animi suppono tamisium ad aestus crustulum dedico.</p>\n      <ol>\n        <li>Debeo subiungo error strenuus anser clam.</li>\n        <li>Coerceo aspernatur tamen dolor depono temperantia iure antepono ulciscor contego.</li>\n        <li>Cunae sollicito ulterius sum culpa abstergo apparatus.</li>\n      </ol>\n      <p>Ipsa adiuvo copia coniuratio. Vorago causa derelinquo utrimque paulatim. Attonbitus turba theologus vero crur.</p>\n      <p>Vulticulus basium calamitas dolorum circumvenio vinum torqueo. Arguo texo vulticulus adinventitias baiulus unde solus supellex. Amplexus sortitus timidus taceo fugit.</p>\n      <p>Cribro cado vere urbanus ad adulescens numquam tenax dolore. Sum deleniti vomica sortitus censura comburo vinculum crastinus aut. Candidus cubo utor armarium aggredior venio laborum.</p>\n      <p>Degenero pel tonsor. Vitae usitas umerus bos thalassinus cibo aestus. Cervus viriliter coepi.</p>\n      <p>Audax viscus vinum adstringo desino administratio conduco. Videlicet architecto illum communis aperiam. Aestus vapulus totus testimonium confero.</p>\n<pre><code>const a = 1;\nconst b = 2;\nconst c = a + b;</code></pre>\n      <p>Absum centum cerno torqueo. Verbum spes pax molestiae defessus placeat vigilo ceno. Recusandae sulum omnis iste.</p>\n      <p>Porro vicinus maiores mollitia atqui doloremque. Votum claustrum capitulus numquam crapula nemo confero cetera circumvenio patior. Usus mollitia denego recusandae verbum accendo placeat dapifer.</p>\n      <p>Solvo suus aeternus usus. Vulpes desparatus ultra stabilis surculus cibo. Aperiam subito autem veritatis demum verto.</p>\n      <p>Harum atqui armarium beatae defungo alveus suscipit catena bene subvenio. Adficio inflammatio bene traho ab minus amissio cauda. Balbus vilis expedita amitto cuius fugiat vindico.</p>\n      <h2>Heading 2</h2>\n      <ul>\n        <li>Vesica aveho alveus voluptate.</li>\n        <li>Thesis ratione cras sollers accusator.</li>\n        <li>Summisse depromo supra argumentum caries nesciunt tergum comitatus.</li>\n      </ul>\n\n      <p>Voluptatibus vulgus totidem. Vitium deserunt vulnero vinculum aperio vulariter adduco venustas. Copiose tepesco doloribus tamisium concedo.</p>\n      <p>Cresco capto aliquam sub vir congregatio circumvenio collum valens. Sum thymum arto terreo accusantium terebro. Molestiae convoco suus viridis damnatio amicitia doloribus sumo cervus.</p>\n      <p>Libero adhaero aetas chirographum dolorem ancilla creptio. Caput aliquam sperno conduco attollo supellex candidus ager hic. Allatus veritatis cribro succurro arx canonicus assumenda.</p>\n    ",
                    "excerpt": "Pauper ciminatio enim coaegresco sol utique spes tamen. Atrox terror thorax. Eum beatus curatio advo...",
                    "id": "my-blog-post-691"
                }
            ];


        const mockMethod = vi.fn().mockReturnValue(mockPostsData)

        const component = await mountSuspended(PostList,{
            methods: {
                useGetPostsList: mockMethod
            }
        })

        console.log(component.html())
        // expect(useGetPostsList).toHaveBeenCalled()
        expect(component.html()).contains("Our Blog");
        expect(component.html()).contains("Learn how to build awesome blog with Nuxt and Tailwind<");
    });
});

