import categoriesRouter from './Categories/categories.router.js';
import produceRouter from './produce/produce.router.js';

const initApp = (app,express)=>{
    app.use(express.json());
    app.get('/',(req,res) =>{
        return res.status(200).json({message:"welcome"});
    })
    app.use('/categories',categoriesRouter);
    app.use('/produce',produceRouter);
    app.get("*",(req,res)=>{
        return res.status(500).json({message:"page not found"});
    })
}
export default initApp