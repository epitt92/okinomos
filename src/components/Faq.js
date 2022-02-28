import '../assets/css/faq.css'
import FaqItem from "./FaqItem";

const Faq = () => {
  const faqs = [
    { title: "What are Meta3oys?", content: "Meta3oys represents an NFT collection of 7777 fashion boys categorized in different levels of rarity."},
    { title: "What is an NFT?", content: "NFT stands for 'non-fungible token'. An NFT is basically data that is accounted for in a digital ledger, and the data represents something specific and unique. An NFT can, for example, represent a unique piece of art or a game token."},
    { title: "How can I get one (or more) NFT(s)?", content: "It will be available for purchase (mint) on our website. At the time of purchase, a randomly selected NFT will be minted on the blockchain and delievered to your wallet."},
    { title: "What blockchain will be used?", content: "Meta3oys will use Ethereum blockchain."},
    { title: "What does «Mint» mean?", content: "NFT Minting is the process by which your digital art or digital content becomes a part of the blockchain."},
    { title: "When will be the minting day?", content: "To be announced."},
    { title: "When will be the price?", content: "To be announced."},
    { title: "When will be the reveal day?", content: "To be announced."},
    ];
  return (
    <section className="product-category section" id="the-faq">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title text-center">
            <h1 className="HeadingNow p-heading"><span>Faq</span></h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="accordion col-md-10 mx-auto" id="basicAccordion">
            { faqs.map((faq, i) => <FaqItem key={i} index={i+1} title={faq['title']} content={faq['content']} />) }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
