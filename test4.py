'''
A jet touches down at velocity 310 km/h. Find the constant acceleration required to stop the 
aircraft 1000 m down the runway.  
'''
# Given values
v0_kmh = 310  # Initial velocity in km/h
v0 = (v0_kmh * 1000) / 3600  # Convert to m/s
d = 1000  # Distance in meters
v = 0  # Final velocity in m/s (since the jet stops)

# Using the equation v^2 = v0^2 + 2ad to solve for acceleration (a)
a = (v**2 - v0**2) / (2 * d)
print(f"The constant acceleration required is {a:.2f} m/s².")
