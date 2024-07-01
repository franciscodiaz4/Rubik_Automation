# Rubik_Automation


# API commands list

.beforeEach
.afterEach
.waitForElementVisible
.pause
.updateValue
.expect.element().text.to.contain()
.expect.element().text()
.assert.visible
.assert.urlContains
.percySnapshot
.end
.assert.textContains
browser.execute('window.scrollTo(0, 2000)')
.refresh()
.isVisible
.moveToElement
browser.element(selector).moveTo([x], [y])
.maximizeWindow()
.window.maximize([callback])

browser.window.getAllHandles(function(result) {
            var handle = result.value[1];
            browser.window.switchTo(handle);
            });

.click
browser.element(selector).click()

.sendKeys
browser.element(selector).sendKeys(...keys)

.moveToElement
browser.element(selector).moveTo([x], [y])

.maximizeWindow()
.window.maximize([callback])