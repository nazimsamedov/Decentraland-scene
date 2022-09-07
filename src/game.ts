let base = new Entity()

base.addComponent(new GLTFShape('models/Theatre.glb'))
base.addComponent(
  new Transform({
    position: new Vector3(8, 0, 8),
  })
)

engine.addEntity(base)

base.getComponent(Transform).rotation.eulerAngles = new Vector3(0, 270, 0)


let cylinder = new CylinderShape()

let wheel1 = new Entity()
wheel1.addComponent(cylinder)
wheel1.addComponent(
  new Transform({
    position: new Vector3(6, 2, 11.9),
    rotation: Quaternion.Euler(90, 0, 0),
    scale: new Vector3(1, 0.05, 1),
  })
)
engine.addEntity(wheel1)

let wheel2 = new Entity()
wheel2.addComponent(cylinder)
wheel2.addComponent(
  new Transform({
    position: new Vector3(10, 2, 11.9),
    rotation: Quaternion.Euler(90, 0, 0),
    scale: new Vector3(1, 0.05, 1),
  })
)
engine.addEntity(wheel2)

let myMaterial = new Material()
myMaterial.albedoTexture = new Texture('images/hypno-wheel.png')

wheel1.addComponent(myMaterial)
wheel2.addComponent(myMaterial)