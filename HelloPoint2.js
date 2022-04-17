// HelloPint2.js (c) 2012 matsuda
// Vertex shader program
var VSHADER_SOURCE = 
  'attribute vec4 a_Position;\n' + // attribute variable
  'void main() {\n' +
  '  gl_Position = a_Position;\n' +
  '  gl_PointSize = 10.0;\n' +
  '}\n'; 

// Fragment shader program
var FSHADER_SOURCE = 
  'void main() {\n' +
  '  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n' +
  '}\n';

function main() {
  // Retrieve <canvas> element
  var canvas = document.getElementById('webgl');

  // Get the rendering context for WebGL
  var gl = getWebGLContext(canvas);
  if (!gl) {
    console.log('Failed to get the rendering context for WebGL');
    return;
  }

  // Initialize shaders
  if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    console.log('Failed to intialize shaders.');
    return;
  }

  // Get the storage location of a_Position
  var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  if (a_Position < 0) {
    console.log('Failed to get the storage location of a_Position');
    return;
  }

	var opt = prompt("Quadrant arrangement is according to mathematic conventions\n" +
					 "In which quadrant would you like the point (1,2,3, or 4)?\n");
	
	if(opt==1){
		gl.vertexAttrib3f(a_Position, 0.5, 0.5, 0.0);
	}
	else if(opt==2){
		gl.vertexAttrib3f(a_Position, -0.5, 0.5, 0.0);
	}
	else if(opt==3){
		gl.vertexAttrib3f(a_Position, -0.5, -0.5, 0.0);
	}
	else if(opt==4){
		gl.vertexAttrib3f(a_Position, 0.5, -0.5, 0.0);
	}
	else window.alert('Sorry! Option does not exist!!!');


  // Pass vertex position to attribute variable
  // gl.vertexAttrib3f(a_Position, 0.0, 0.0, 0.0);

  // Specify the color for clearing <canvas>
  gl.clearColor(0.0, 0.0, 0.0, 1.0);

  // Clear <canvas>
  gl.clear(gl.COLOR_BUFFER_BIT);
    
  // Draw
  gl.drawArrays(gl.POINTS, 0, 1);
}
