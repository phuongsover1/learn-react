import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="app bg-gray-20">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
          quod praesentium iusto nihil voluptatibus, excepturi sit laudantium
          unde! Voluptatum rerum enim veniam accusamus suscipit, at sequi.
          Corporis facere ab quam error officia dolorum itaque laboriosam
          dolores, sequi provident iste recusandae voluptate voluptatibus est
          minus nemo aut esse, voluptas necessitatibus impedit. Cupiditate
          deleniti quos quasi nesciunt ea voluptatum iste quis eos commodi
          magni, laudantium nulla corrupti maiores neque assumenda est obcaecati
          labore libero quisquam dolorum? Error doloribus voluptate vel iusto
          earum quibusdam aliquid cumque laborum id accusantium aliquam
          perferendis quos magni reprehenderit, ab facilis dolorem neque impedit
          sed nesciunt! Recusandae amet accusamus saepe! Expedita ullam sapiente
          ab mollitia labore. Assumenda et nam tempore, quibusdam harum sequi,
          enim velit necessitatibus pariatur deleniti nostrum ipsum, amet
          voluptatibus soluta libero doloribus! Eius tenetur illum, ipsa maxime
          quod dolorem repellat modi facere ex sequi nisi hic illo minima non
          dicta laborum aliquid rem autem vel, alias nobis nulla eaque! Illum
          ipsa vero similique vel? Vero quae perspiciatis quos impedit.
          Accusantium necessitatibus maiores dicta eius quo perferendis
          reiciendis quia corrupti aspernatur dolores molestiae officiis
          nesciunt sunt, voluptas laboriosam a ipsa, corporis nisi blanditiis ad
          totam excepturi autem, esse praesentium? Distinctio dolore earum quod
          pariatur modi voluptates cupiditate et ut repellat veritatis,
          accusamus, perferendis itaque aut consequatur nesciunt esse doloribus
          quaerat, delectus tempora. Sunt laboriosam itaque dolore, fugiat
          accusamus a consectetur accusantium nisi! Ad dolorem esse,
          reprehenderit hic voluptatum laborum nulla aspernatur, nihil ullam, et
          deserunt amet. Quae, eius nesciunt? Quibusdam dicta porro ratione,
          nihil aperiam incidunt magni praesentium, id maiores accusamus
          dignissimos saepe nisi, sed optio eligendi cupiditate sit ut fuga
          voluptates dolor reprehenderit. Delectus fugiat possimus sit laborum
          porro beatae dignissimos et explicabo odit distinctio sint dolorem,
          eveniet sunt nisi similique commodi vitae animi esse eaque maiores
          unde illo hic? Tempore, adipisci libero quidem beatae ipsum facilis
          aut! Corrupti, rem, cum mollitia deleniti aliquid illum eius pariatur
          ad quis doloremque nihil. Odit inventore neque cumque dicta error
          fugit sint id voluptatibus, sed ratione recusandae nobis
          exercitationem iste, voluptatem doloremque nulla ipsam consectetur
          mollitia ut architecto facere quia fuga accusamus? Numquam inventore
          eveniet minus voluptate perferendis alias voluptatibus enim vero
          consequuntur quod facere repudiandae nemo officiis obcaecati corporis
          voluptatem ab dignissimos natus quos excepturi, qui eaque animi
          veniam? Amet molestias magni impedit cupiditate accusamus laboriosam
          incidunt, beatae nam debitis. Eum odio, repellat quo, quos a facere
          explicabo quis nemo id aut itaque error doloremque culpa quae laborum
          voluptates! Cupiditate quam, illum blanditiis doloribus et voluptate
          ducimus necessitatibus, labore maxime nostrum fugiat odit! Totam
          tempora veritatis voluptates explicabo est, ex officiis harum eius
          error temporibus sequi ad, atque vel corporis porro accusamus fugiat
          ea libero. Repellat, facilis! Itaque dolorum nostrum ex, officia hic
          eos corporis exercitationem, quam voluptatem, odio tempora a
          cupiditate consequuntur! Rem vitae autem illum mollitia dolores ex
          quidem tempore, nobis a accusantium excepturi inventore unde
          voluptatibus ea eos ad quisquam dolor repellendus earum iure numquam
          dignissimos impedit ratione! Cumque dolorum adipisci ut aliquam nisi
          explicabo illum magni illo! Veritatis placeat explicabo suscipit? Quo
          maiores deserunt delectus officia temporibus cupiditate, repudiandae
          aliquam eum sapiente laboriosam rerum, praesentium odit alias ullam
          amet dicta. Harum suscipit facere autem sapiente distinctio
          voluptatibus voluptatem eius ea quibusdam laboriosam, exercitationem
          alias, eum sit consequatur non eligendi aspernatur ab. Minima dolorum,
          sint autem atque sed corporis adipisci pariatur debitis eos, a tempore
          odit consequatur voluptatum labore rerum voluptas officiis omnis
          corrupti at maxime? Similique repellendus voluptas nisi commodi a,
          aperiam labore. Commodi nihil veritatis sequi quasi delectus! Unde
          perferendis laboriosam molestiae quos explicabo, ex autem doloremque.
          Culpa ipsa et temporibus minima ullam architecto porro dolore nam ut
          officia fuga pariatur aliquam quia, est non deleniti tempore nisi?
          Eaque voluptatum numquam ea libero natus possimus, velit obcaecati
          doloribus inventore quis? Maiores porro autem voluptas saepe, quod
          placeat laborum sapiente, ullam labore illo, soluta sed. Labore
          ducimus aut fugiat odit aliquid quibusdam natus eveniet tempora fuga,
          cupiditate nisi mollitia iste, soluta nam expedita nobis accusamus
          animi! Doloribus corporis quo laudantium velit molestiae earum
          mollitia illo rerum reprehenderit eos deserunt dolorum fuga, natus
          quibusdam, excepturi, quisquam aut sunt! Error nisi animi in totam
          explicabo dignissimos, officia facilis consectetur itaque aut beatae
          quo maiores, dicta debitis quod alias natus? Cumque illo ducimus sunt
          cupiditate commodi obcaecati, corrupti consequuntur tempora ipsum,
          dignissimos et quisquam non, corporis soluta autem id nesciunt culpa?
          Blanditiis voluptate voluptates quasi voluptas delectus dolor magnam
          iusto, maiores ab mollitia nihil sunt quidem eius neque numquam.
          Repellendus assumenda perferendis maiores corrupti ipsum, debitis cum
          corporis fuga numquam incidunt molestiae aperiam consequatur expedita
          saepe tempore, quibusdam dolore ducimus dolorum aliquid minus,
          voluptas nihil eveniet? Accusamus consectetur repudiandae veritatis
          nulla nostrum commodi repellendus voluptatibus qui error, dolorem
          adipisci tempora quam placeat voluptas nisi consequatur quae quia
          corrupti. Saepe deleniti quam est optio nisi impedit doloremque cum
          numquam ex voluptates, ullam molestias ipsa quidem nesciunt iusto vero
          illum pariatur praesentium, quasi soluta similique sint unde culpa
          quisquam. Molestias rem magni eius esse repudiandae nihil animi
          voluptas dolorum commodi praesentium, in dicta enim illum! Numquam
          minima, ex voluptas facilis tenetur mollitia totam. At ullam, quis
          soluta facilis eligendi saepe alias quisquam laboriosam error cum in
          ad voluptatibus harum autem optio suscipit unde vero molestiae aliquam
          earum quaerat obcaecati praesentium quod. Quaerat minus perspiciatis
          omnis numquam debitis, voluptatum placeat. Ipsum asperiores veniam
          porro, deleniti odit nam maxime molestiae itaque non voluptas, debitis
          voluptates amet aut quasi nostrum cumque distinctio impedit ex ipsa
          ducimus blanditiis pariatur, perferendis quod! Dolor doloribus quae,
          ex cupiditate consectetur aspernatur quos animi. Animi nesciunt minima
          tenetur doloribus exercitationem aliquid ratione et? Praesentium
          voluptates recusandae debitis omnis nisi pariatur, a dolorum
          dignissimos consectetur laudantium dolores excepturi ab aliquam nihil
          obcaecati aspernatur adipisci, non nobis consequuntur voluptatem
          voluptas laborum temporibus. Beatae illum voluptas eaque nihil impedit
          non iusto aliquid autem maxime deserunt deleniti aspernatur, tempore
          harum hic ducimus est mollitia, cupiditate minima corporis
          exercitationem veritatis! Est aut iste saepe similique nihil, sed modi
          ex quisquam. Impedit blanditiis veritatis cupiditate atque porro odit
          ratione tempora mollitia perferendis sapiente, architecto quisquam
          saepe fugit doloribus voluptas incidunt laboriosam earum.
        </p>
      </div>
    </>
  );
}

export default App;
