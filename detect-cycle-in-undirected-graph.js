class Graph{
    constructor(v){
        this.v=v;
        this.adj=new Array(v).fill().map(()=>new Array());
        this.visited=new Array(v).fill(false);
    }
    addEdge(src,dest){
        this.adj[src].push(dest);
        this.adj[dest].push(src);
    }
    isCyclicUtil(node,parent){
        this.visited[node]=true;

        let children=this.adj[node];
        for(let i=0;i<children.length;i++){
            if(!this.visited[children[i]]){
                if(this.isCyclicUtil(children[i],node)){
                return true;
            }else if(children[i]!=parent){
                return true;
            }
            }
        }
        return false;
    }
    isCyclic(){
        for(let i=0;i<this.v;i++){
            if(!this.visited[i]){
                if(this.isCyclicUtil(i,-1)){
                return true;
            }
            }
            
        }
        return false;
    }

}
const g1=new Graph(5);
g1.addEdge(1, 0);
g1.addEdge(0, 2);
g1.addEdge(2, 1);
g1.addEdge(0, 3);
g1.addEdge(3, 4);


  
if(g1.isCyclic())
    document.write("Graph contains cycle");
else
    document.write("<br/>Graph doesn't "
                   + "contain cycle");

const g2=new Graph(3);
g2.addEdge(0, 1);
g2.addEdge(1, 2);


  
if(g2.isCyclic())
    document.write("<br/>Graph contains cycle");
else
    document.write("<br/>Graph doesn't "
                   + "contain cycle");