
const List =require('../models/lists');

exports.getAllLists = (req,res,next)=>{
    List.find().then(lists =>{
        res.status(200).json({message: " all lists fetched", lists: lists});
    }).catch(err =>{
        res.status(404).json({message: "error in fetching lists" , err: err})
    });
};

exports.addList = (req, res, next) => {
    const list = new List({
        title: req.body.title
    });
    list.save().then(result =>{
        res.status(201).json({message:"list created", list: result});
    }).catch(err =>{
        res.status(400).json({message:"error in creating list", err: err});
    });
}

exports.deleteList = (req, res, next) =>{
    const {listId} = req.params;
    List.findById(listId).then(list =>{
        if(!list){
            res.status(404).json({message:"list not found"});
        }
        return List.findByIdAndRemove(listId);
    }).then(result =>{
        res.status(204).json({message:"list deleted"});
    }).catch(err =>{
        res.status(400).json({message:"error in deleting",err: err});
    });
}