The logic for this sketch was developed using JRubyArt because it supports loading of SVG image and in general ruby leads to dry coding practices unlike java and javascript, here is JRubyArt code:-
```ruby
# After an Islamic Star Sketch by Mary Scahill
# https://www.openprocessing.org/sketch/78611
attr_reader :star
ANGLE = 60.radians
XOFF = 133
YOFF = 10
STAR_OFF = 116

def settings
  size(460, 360)
end

def setup
  sketch_title 'Islamic Star'
  @star = load_shape(data_path('islamicstarBIG.svg'))
  star.disable_style
  star.scale(0.2)
end

def draw
  background(200, 0, 0)
  fill(0, 0, 200)
  stroke(150)
  stroke_weight(6)
  draw_tiles(star)
  no_loop
end

def draw_star
  6.times do
    translate XOFF, YOFF
    rotate ANGLE
    shape(star, 0, 0)
  end
  translate(STAR_OFF, 0)
end

def draw_tiles(star)
  translate 0, -40
  4.times { draw_star }
  translate(-4 * STAR_OFF, 200)
  4.times { draw_star }
end
```
