
import { createServer,Model,Response,hasMany, belongsTo } from "miragejs"

import promptcomponents from './db/prompt_components.json';

export function makeServer(){

    let server = createServer({
        models:{
            prompt:Model.extend({
                comps:hasMany()
            }),
            promptComp:Model,
            promptStrategy:Model
        },
        seeds(server){
            promptcomponents?.promptComponents.forEach(comp=>server.create('promptComp',comp))
        },
        routes(){
            this.namespace = 'api/v1';
            this.get('/promptcomponents',(schema) => {
                return schema.promptComps.all()
            });
        }
    });

    return server;
}