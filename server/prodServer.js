import http from 'http'
import config from 'config'
import route from '../modules/route';


route().listen(config.get('port'), () => {
	console.log(`Server listen in ${config.get('port')} port`);
})
