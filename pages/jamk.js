import Layout from "../components/Layout"
export default function blog() {
  return (
    <Layout>

        <div className="blog-container">

                <a  href="https://jean198.github.io/Daily-allowance-calculator/" className="jamk-link">
                  <button className="jamk-project">Unemployment benefits calculator( <span className="frameworks"> HTML5/CSS3/JavaScript </span>)</button>
                </a>
                <a href="https://student.labranet.jamk.fi/~AB5120/jado-niyigaba-1986-web-palvelinohjelmointi/harjoitus3/harjoitus3_3/game_page.php" className="jamk-link">
                  <button className="jamk-project">Money Card Game ( <span className="frameworks"> HTML5/CSS3/PHP </span>)</button>
                </a>
                <a href="https://jean198.github.io/To-Do-list/" className="jamk-link">
                  <button className="jamk-project">Todo App ( <span className="frameworks"> HTML5/CSS3/JavaScript </span>)</button>
                </a>
                <a href="https://jean198.github.io/Speed-calculator/" className="jamk-link">
                  <button className="jamk-project">Speed calculator ( <span className="frameworks"> HTML5/CSS3/JavaScript </span>)</button>
                </a>

        </div>

    </Layout>
    
  )
}