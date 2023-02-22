### Node Module's required to run this component properly
```
    Name    : framer-motion
    Version : ^9.0.4
```
### What does it do
This component makes a div whose gradient background changes color and rotates 360deg over a period of 80seconds.
You can modify the parameters below to change properties
```
For Updating the color or rotation

    animate={{
                background: [
                        'linear-gradient(0deg, #33ccff 0%, #ff99cc 100%)',
                        'linear-gradient(180deg, #99CCFF 0%, #FFFFFF 100%)', 
                        'linear-gradient(360deg, #33ccff 0%, #ff99cc 100%)',
				],
			}}

For Updating the timings or repetition of animation
    transition={{duration: 80, ease: "easeInOut" , repeat: Infinity }}
```
## Screenshots below

![Updating_bg1](https://user-images.githubusercontent.com/77034913/220486901-8b843ba2-693d-47b9-b317-6d69d088836f.jpg)


![Full Page Screenshot 2](https://user-images.githubusercontent.com/77034913/220486890-38b3b247-3a66-49b6-b587-462ed345a87d.jpg)
