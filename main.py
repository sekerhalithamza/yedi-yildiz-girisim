# Importing library
import qrcode

# Data to be encoded
data = "https://www.yediyildiz.com.tr/hasanyediyildiz.html"

# Encoding data using make() function
img = qrcode.make(data)

# Saving as an image file
img.save("hasanyediyildiz.png")
