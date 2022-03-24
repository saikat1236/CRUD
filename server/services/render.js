const axios=require('axios');

exports.all_user = (req,res)=>{
    axios.get('http://localhost:3000/api/users')
    .then(function(response){
        res.render('index',{users: response.data});
    })
    .catch(err=>{
        res.send(err);
    });
    
}
exports.all_user2 = (req,res)=>{
    axios.get('http://localhost:3000/api/users2')
    .then(function(response){
        res.render('index2',{users: response.data});
    })
    .catch(err=>{
        res.send(err);
    });
    
}


exports.add_user= (req,res)=>{
    res.render('add_user');
}
exports.form= (req,res)=>{
    res.render('form');
}
exports.output= (req,res)=>{
    res.render('sorry');
}
exports.homeRoutes= (req,res)=>{
    res.render('main');
}
exports.update_user=(req,res)=>{
    axios.get('http://localhost:3000/api/users',{params:{id: req.query.id}})
    .then(function(userdata){
        res.render('update_user',{user: userdata.data})
    })
    .catch(err=>{
        res.send(err);
    });

}