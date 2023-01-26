//  
import './card-list.styles.css';
import Card from '../card/card.component';

const CardList = ({ monsters, id }) => {
    // const { monsters, id } = props;
        return (
            <div className="card-list" key={id}>
                {
                    monsters.map((monster) => {    
                        return (
                            <Card monster={monster} />
                            )
                    })
                }
            </div>
        );
}


// class CardList extends Component{
//     render() {
//         const { monsters } = this.props;
//         return (
//             <div className="card-list">
//                 {
//                     monsters.map((monster) => {
                        
//                         return (
//                             <Card monster={monster} />
//                             )
//                     })
//                 }
//             </div>
//         );
//     }
// }

export default CardList;