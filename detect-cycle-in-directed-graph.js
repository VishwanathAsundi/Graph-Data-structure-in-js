// Time Complexity: O(V+E). 
// Time Complexity of this method is same as time complexity of DFS traversal which is O(V+E).
// Space Complexity: O(V). 
// To store the visited and recursion stack O(V) space is needed.
class Graph{
    constructor(v){
        this.v=v;
        this.adj=new Array(v).fill().map(()=>new Array());
        this.visited=new Array(v).fill(false);
    }
    addEdge(src,dest){
        this.adj[src].push(dest);
    }
    isCyclicUtil(node,recStack){
        if(recStack[node]){
            return true;
        }
        if(this.visited[node]){
            return false;
        }

        recStack[node]=true;
        this.visited[node]=true;

        let children=this.adj[node];
        for(let i=0;i<children.length;i++){
            if(this.isCyclicUtil(children[i],recStack)){
                return true;
            }
        }
        recStack[node]=false;
        return false;
    }
    isCyclic(){
        let recStack=new Array(this.v).fill(false);

        for(let i=0;i<this.v;i++){
            if(this.isCyclicUtil(i,recStack)){
                return true;
            }
        }
        return false;
    }

}
const g=new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);


  
if(g.isCyclic())
    document.write("Graph contains cycle");
else
    document.write("<br/>Graph doesn't "
                   + "contain cycle");

const g2=new Graph(4);

g2.addEdge(0,1);
g2.addEdge(0,2);
g2.addEdge(1,2);
g2.addEdge(2,3);

if(g2.isCyclic())
    document.write("Graph contains cycle");
else
    document.write("<br/>Graph doesn't "
                   + "contain cycle");