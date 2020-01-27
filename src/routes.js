import {Router} from 'express'

import DevController from './controllers/DevController'
import SearchController from './controllers/SearchController'
import SessionController from './controllers/SessionController'

const routes = Router();

// create a dev
routes.post('/devs', DevController.store)

// login
routes.post('/login', SessionController.store)


// list devs
routes.get('/devs', DevController.index)
// inative devs
routes.put('/devs/delete/:github_user', DevController.update)
// search devs
routes.get('/search', SearchController.index)



export default routes;
