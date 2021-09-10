import React,{useState,useEffect} from 'react'
import { makeStyles,InputBase,List,ListItem } from '@material-ui/core'
import {Search, SettingsInputAntennaTwoTone} from '@material-ui/icons'
import { useSelector,useDispatch } from 'react-redux'
import { getProducts, getProducts as listProducts  } from '../../redux/actions/ProductActions'
import { Link } from 'react-router-dom'

const useStyle = makeStyles((theme)=>({
    search: {
        borderRadius:2,
        backgroundColor: "#fff",
        marginLeft: 10,
        width: '38%',
        display:"flex",
        color:"black",
      },
      searchIcon: {
        padding: 5,
        height: '100%',
        display: 'flex',
        color:'blue'
      },
      inputRoot: {
        fontSize:14,
        width:"100%"
      },
      inputInput: {
        padding:10,

      },
      list:{
         position:'absolute',
         color:'#000',
         background:'white',
         marginTop:"45px"
      }
}))
 const Searchbar = () => {
     const classes = useStyle()
     const [open, setopen] = useState(true)

     const [text, settext] = useState();

     const getText = (text)=>{
       settext(text)
       setopen(false)
     }
     
      
     const {products} = useSelector(state => state.getProducts)
     

      
     const dispatch = useDispatch()
     useEffect(() => {
        dispatch(listProducts())
     },[dispatch])

    return (
        <div className={classes.search}>
        <InputBase
          placeholder="Search for product brands and more"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          onChange={(e)=>{getText(e.target.value)}}
        />
         <div className={classes.searchIcon}>
          <Search/>
        </div>
        {
          text && 
          <List className={classes.list} hidden={open}>
            {
              
              products.filter(product =>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                <ListItem>
                  <Link to={`/product/${product.id}`}
                   style={{textDecoration:"none",color:"black"}}
                   onClick={()=>{setopen(true)}}>
                    {
                      product.title.longTitle
                    }
                    </Link>
                </ListItem> 
              ))
             }
          </List>
        }
      </div>
    )
}
export default  Searchbar;