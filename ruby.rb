# UNIT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# Create the code that makes all Bike specs pass.
# Run the file with the following command: $ rspec ruby_spec.rb

# Add comments to your code explaining your approach

class Bike
  attr_accessor :model, :wheels, :speed
  def initialize(model)
    @model = model
    @wheels = 2
    @speed = 0
  end

  def current_speed
    @speed
  end

  def pedal_faster(pedalsPerMin)
    @speed += pedalsPerMin
  end

  def brake(brakeForce)
    @speed > brakeForce ? @speed -= brakeForce : @speed = 0
  end

  def bike_info 
    "The #{@model} bike has #{@wheels} wheels and is going #{@speed} mph."
  end
end