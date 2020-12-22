const shape = new GLTFShape('models/mark.glb');
const entity = new Entity();
entity.addComponent(shape);
entity.addComponent(new Transform({
  position:new Vector3(8,0.5,8)
}));
engine.addEntity(entity);

const box = new Entity();
const boxShape = new BoxShape();
const mat = new Material();
mat.albedoColor = new Color4(0,0,0,0.5);
box.addComponent(boxShape);
box.addComponent(mat);
box.setParent(entity);
mat.castShadows = false;

class LogCameraEurler implements ISystem {
  dtCount = 0;

  update(dt){    
    this.dtCount += dt;
    if(this.dtCount>1){
      this.dtCount = 0;
      console.log(Camera.instance.rotation.eulerAngles.toString())
    }
  }
}
engine.addSystem(new LogCameraEurler());