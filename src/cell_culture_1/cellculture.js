(function( cellculture, $, undefined ) {
  cellculture.colourings = [
    "#FFFFFF",
    "#FF0000"
  ];

  cellculture.live_p = 0.175;

  cellculture.setup = function( paper, dim ) {
    var matrix = new_matrix( dim );
    var shapes = create_shapes( paper, matrix );
    update_shapes( matrix, shapes );

    return function() {
      matrix = evolve_matrix( matrix, cellculture.live_p );
      update_shapes( matrix, shapes );
    }
  };


  function new_matrix( dim ) {
    var matrix = Array( dim * dim );
    matrix.dim = dim;
    matrix.t = 0;
    for( var i = 0; i < dim*dim; i++ ) {
      matrix[i] = 0;
    }
    return matrix;
  }


  function create_shapes( paper, matrix ) {
    var coords,
        shapes = Array( matrix.length );
    for( var i = 0; i < matrix.length; i++ ) {
      rect = cell_rect( cell_position(matrix,i), matrix.dim, paper.width, paper.height );
      shapes[i] = paper.rect(
        rect.x,
        rect.y,
        rect.w,
        rect.h,
        4
      );
    }
    return shapes;
  }


  function update_shapes( matrix, shapes ) {
    var i;
    for( i = 0; i < matrix.length; i++ ) {
      shapes[i].attr( "fill", cell_colour( matrix[i] ) );
    }
  }


  function evolve_matrix( matrix, p ) {
    var succ = new_matrix( matrix.dim )
    succ.t = matrix.t + 1;
    for( var i = 0; i < matrix.length; i ++ ) {
      if( Math.random() < p ) {
        succ[i] = matrix[i] + 1;
      } else {
        succ[i] = Math.max( 0, matrix[i] - 1 );
      }
    }
    return succ;
  }


  function cell_position( matrix, i ) {
    return {
      y: Math.floor( i / matrix.dim ),
      x: i % matrix.dim
    };
  }


  function cell_rect( cell_pos, dim, width, height ) {
    return {
      y: ( height / dim ) * cell_pos.y,
      x: ( width / dim ) * cell_pos.x,
      w: width / dim,
      h: height / dim
    };
  }


  function cell_colour( life ) {
    return cellculture.colourings[Math.min(life,cellculture.colourings.length-1)];
  }

}( window.cellculture = window.cellculture || {}, jQuery ));
