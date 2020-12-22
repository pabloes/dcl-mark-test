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