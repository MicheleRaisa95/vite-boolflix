// iporto fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core';

// importo il componente icon 
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// importo le icone

import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons/faStar';

import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

//  aggiungo le icone alla libreria 

library.add(fasStar, farStar);

// esporto la libreria 

export { FontAwesomeIcon };